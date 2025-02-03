fetch('https://avtoraqam.uzex.uz/ru/Lot/GetCount/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });