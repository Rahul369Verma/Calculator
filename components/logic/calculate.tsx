import operate from "./operate";

function isNumber(item: string) {
  return !!item?.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
type ofItem = {
  total: string | null;
  next: string | null;
  operation: string | null;
};

type ObjectType = {
  one: string;
  two: string;
  result: string;
  operation: string;
  id: number;
  createdDate: string;
  createdTime: string;
};

export default function calculate(obj: ofItem, buttonName: string): ofItem {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (buttonName === "CE") {
    if (obj.next) {
      return {
        ...obj,
        next: obj.next.slice(0, -1),
      };
    }
    if (obj.operation) {
      return {
        ...obj,
        operation: null,
      };
    }
    if (obj.total) {
      return {
        ...obj,
        total: obj.total.slice(0, -1),
      };
    }
    return {
      ...obj,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return { ...obj };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next && obj.next !== "0") {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next && obj.next !== "0") {
      return {
        ...obj,
        next: obj.next + buttonName,
        total: null,
      };
    }
    if (obj.total) {
      return {
        ...obj,
        total: obj.total + buttonName,
      };
    }
    return {
      ...obj,
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === ".") {
    // .  =>
    if (obj.next) {
      if (obj.next.includes(".")) {
        // 0
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      // 0.7 *
      return { ...obj, next: "0." };
    }
    if (obj.total) {
      // 0
      if (obj.total.includes(".")) {
        return { ...obj };
      }
      return { ...obj, total: `${obj.total}.` };
    }
    return { ...obj, next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation && obj.total) {
      let result = operate(obj.total, obj.next, obj.operation);

      let history = JSON.parse(localStorage.getItem("history") || "[]");
      let trash = JSON.parse(localStorage.getItem("trash") || "[]");
      let historyMax = Math.max(...history.map((o: ObjectType) => o.id));
      let trashMax = Math.max(...trash.map((o: ObjectType) => o.id));
      let max = Math.max(historyMax, trashMax);

      let tempObject = {
        id: max + 1,
        createdDate: new Date().toLocaleString().split(",")[0],
        createdTime: new Date().toLocaleString().split(",")[1],
        one: obj.total,
        two: obj.next,
        operation: obj.operation,
        result: result,
      };
      history.push(tempObject);

      // Put the object into storage
      localStorage.setItem("history", JSON.stringify(history));
      return {
        total: result,
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return { ...obj };
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return { ...obj };
  }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { ...obj, total: "0", operation: buttonName };
    }

    if (!obj.next) {
      return { ...obj };
    }

    let result = operate(obj.total, obj.next, obj.operation);
    let history = JSON.parse(localStorage.getItem("history") || "[]");
    let trash = JSON.parse(localStorage.getItem("trash") || "[]");
    let historyMax;
    if (history.length === 0) {
      historyMax = 0;
    } else {
      historyMax = Math.max(...history.map((o: ObjectType) => o.id));
    }
    let trashMax;
    if (trash.length === 0) {
      trashMax = 0;
    } else {
      trashMax = Math.max(...trash.map((o: ObjectType) => o.id));
    }
    let max = Math.max(historyMax, trashMax);

    let tempObject = {
      id: max + 1 || 1,
      createdDate: new Date().toLocaleString().split(",")[0],
      createdTime: new Date().toLocaleString().split(",")[1],
      one: obj.total,
      two: obj.next,
      operation: obj.operation,
      result: result,
    };
    history.push(tempObject);

    // Put the object into storage
    localStorage.setItem("history", JSON.stringify(history));
    return {
      total: result,
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { ...obj };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
