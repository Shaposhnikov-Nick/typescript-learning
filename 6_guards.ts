// вспомогательные конструкции

// typeof - проверка, что объект определенного типа
//"string" "number" "bigint" "boolean" "symbol" "undefined" "object" "function"
// !== undefined
function strip(x: number | string) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

// instanceof - проверка, что объект является экземпляром определенного класса
class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "error header";
  message = "error result";
}

function handle(response: MyResponse | MyError) {
  if (response instanceof MyResponse) {
    return {
      info: response.header + response.result,
    };
  }
  return {
    info: response.header + response.message,
  };
}

//
type AlertType = "success" | "danger" | "warning";
function setAlertType(type: AlertType) {}

setAlertType("success");
// setAlertType('default')
