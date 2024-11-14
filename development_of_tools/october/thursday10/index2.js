// Загрузка данных с сервера
function loadData(callback) {
  console.log('Загрузка данных...');
  setTimeout(() => {
    const data = { id: 1, name: 'Product A' };
    console.log('Данные загружены:', data);
    callback(null, data);
  }, 1000);
}

// Валидация данных
function validateData(data, callback) {
  console.log('Валидация данных...');
  setTimeout(() => {
    if (!data.name) {
      callback('Ошибка: имя продукта отсутствует');
    } else {
      console.log('Данные валидны');
      callback(null, data);
    }
  }, 1000);
}

// Обработка данных
function processData(data, callback) {
  console.log('Обработка данных...');
  setTimeout(() => {
    data.processed = true;
    console.log('Данные обработаны:', data);
    callback(null, data);
  }, 1000);
}

// Сохранение данных
function saveData(data, callback) {
  console.log('Сохранение данных...');
  setTimeout(() => {
    console.log('Данные сохранены:', data);
    callback(null, 'Успешно сохранено');
  }, 1000);
}

// Главная функция с "адской пирамидой колбеков"
function main() {
  loadData((loadError, data) => {
    if (loadError) {
      return console.error('Ошибка при загрузке данных:', loadError);
    }

    validateData(data, (validateError, validData) => {
      if (validateError) {
        return console.error('Ошибка при валидации данных:', validateError);
      }

      processData(validData, (processError, processedData) => {
        if (processError) {
          return console.error('Ошибка при обработке данных:', processError);
        }

        saveData(processedData, (saveError, saveResult) => {
          if (saveError) {
            return console.error('Ошибка при сохранении данных:', saveError);
          }

          console.log('Финальный результат:', saveResult);
        });
      });
    });
  });
}

// Запуск основного процесса
main();
