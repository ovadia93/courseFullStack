// מביא לנו בתוך מערך את כל התאים שבטבלה
// document.querySelectorAll('td')

// לולאה שרצה על מערכים
// במקרה שלנו היא מביאה לנו כל פעם תא אחר מהטבלה
// .forEach(myTdElem => {  })

let isX = true;

document.querySelectorAll('td').forEach(myTdElem => {
    // נרשם לאירוע onclick
    // זה נרשם על כל אלמנט בנפרד
    myTdElem.addEventListener('click', (ev) => {
        if (ev.target.innerHTML) {
            return;
        }
        if (isX) {
            ev.target.innerHTML = "X";
        } else {
            ev.target.innerHTML = "O";
        }

        // אופציה נוספת להשמת הערכים
        // ev.target.innerHTML = isX ? "X" : "O";

        // מחליף בין התורות
        isX = !isX;
    });
});

function whoWon() {
    const tds = document.querySelectorAll(`td`);



}