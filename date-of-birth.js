const daySelect = document.querySelector('#day');
const monthSelect = document.querySelector('#month');
const yearSelect = document.querySelector('#year');

const dates = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 30,
    September: 31,
    October: 30,
    November: 31,
    December: 30
};

/*  min age = 12, max age = 100 */
const addYears = function () {
    const date = new Date();
    const thisYear = Number(date.getFullYear());

    for (let year = thisYear - 12; year >= thisYear - 112; year--) {
        const option = document.createElement('option');
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

const addMonths = function () {
    for (const month in dates) {
        const option = document.createElement('option');
        option.textContent = month;
        monthSelect.appendChild(option);
    }
}

const resetDay = function () {
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }
    const option = document.createElement('option');
    option.textContent = 'DD';
    option.value = '0';
    option.style.display = 'none';
    daySelect.appendChild(option);
}

const addDays = function (month, leap) {
    if (month === '0')
        month = 'January';

    const store = daySelect.value;
    let days = dates[month];

    resetDay();

    if (month === 'February' && leap === true)
        days++;
    for (let day = 1; day <= days; day++) {
        const option = document.createElement('option');
        option.textContent = day;
        daySelect.appendChild(option);
    }
    if (store !== '' && store <= days)
        daySelect.value = store;
}

yearSelect.onchange = () =>
    addDays(monthSelect.value, yearSelect.value % 4 == 0);

monthSelect.onchange = () =>
    addDays(monthSelect.value, yearSelect.value % 4 == 0);

addMonths();
addYears();
addDays('January', false);