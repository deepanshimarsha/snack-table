import { useState } from "react";
import { snacks } from "./db/snacks";

export default function SnackTable() {
  const [snackState, setSnackState] = useState(snacks);

  const handleInput = (e) => {
    let newFilteredSnack = snacks.slice();
    newFilteredSnack = newFilteredSnack.filter(
      ({ product_name, ingredients }) => {
        const count = ingredients
          .map((ele) => ele.toLowerCase())
          .reduce((acc, curr) => {
            if (curr.includes(e.target.value.toLowerCase())) {
              return acc + 1;
            } else {
              return acc;
            }
          }, 0);

        return product_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) || count > 0
          ? true
          : false;
      }
    );

    setSnackState(newFilteredSnack);
  };
  const sortById = () => {
    let newFilteredSnack = snacks.slice();
    newFilteredSnack = [...newFilteredSnack].sort((a, b) => b.id - a.id);
    setSnackState(newFilteredSnack);
  };
  const sortByCalories = () => {
    let newFilteredSnack = snacks.slice();
    newFilteredSnack = [...newFilteredSnack].sort(
      (a, b) => b.calories - a.calories
    );
    setSnackState(newFilteredSnack);
  };
  const sortByIngredients = () => {
    let newFilteredSnack = snacks.slice();
    newFilteredSnack = [...newFilteredSnack].sort(
      (a, b) => b.ingredients - a.ingredients
    );
    setSnackState(newFilteredSnack);
  };
  const sortByName = () => {
    let newFilteredSnack = snacks.slice();
    newFilteredSnack = [...newFilteredSnack].sort(
      (a, b) => b.product_name - a.product_name
    );
    setSnackState(newFilteredSnack);
  };

  const sortByPrice = () => {
    let newFilteredSnack = snackState.slice();
    newFilteredSnack = [...newFilteredSnack].sort((a, b) => b.price - a.price);
    setSnackState(newFilteredSnack);
  };
  const sortByWeight = () => {
    let newFilteredSnack = snackState.slice();
    newFilteredSnack = [...newFilteredSnack].sort(
      (a, b) =>
        Number(b.product_weight.split("g")[0]) -
        Number(a.product_weight.split("g")[0])
    );
    setSnackState(newFilteredSnack);
  };
  return (
    <div className="search-and-table">
      <div className="search-container">
        <input
          className="search-input"
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="search by name or ingredients...."
        />
      </div>
      <table className="table">
        <thead className="column">
          <tr>
            <th onClick={sortById}>ID</th>
            <th onClick={sortByName}>Product Name</th>
            <th onClick={sortByWeight}>Product Weight</th>
            <th onClick={sortByPrice}>Price(INR)</th>
            <th onClick={sortByCalories}>Calories</th>
            <th onClick={sortByIngredients}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {snackState.map((snack) => {
            return (
              <tr>
                <td>{snack.id}</td>
                <td>{snack.product_name}</td>
                <td>{snack.product_weight}</td>
                <td>{snack.price}</td>
                <td>{snack.calories}</td>
                <td>
                  {[...snack.ingredients]
                    .sort((a, b) => a - b)
                    .map((ele, idx) =>
                      idx < snack.ingredients.length - 1 ? ele + ", " : ele
                    )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
