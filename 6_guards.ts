// вспомогательные конструкции

// typeof - проверка, что объект определенного типа
function strip(x: number | string) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

// instansof - проверка, что объект является экземпляром определенного класса
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
