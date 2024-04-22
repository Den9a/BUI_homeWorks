
// TASK #1

// function without(obj, propertyName) {
//     for(const key in obj) {
//         if (propertyName === key) {
//             obj[key] = null;
            
//         }
//     }
//     return obj
// }


// // Код для перевірки 
// const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
// console.log(without(data, 'login')) 

// TASK #2

const DataProducts = ['aplle', 'orange', 'aplle',
 'orange', 'aplle', 'orange', 'aplle', 'orange',
  'aplle', 'orange', 'aplle', 'orange', 'aplle', 
];

const DataMarcket = ['aplle', 'orange', ];
const badWord = ['піпець', 'блін', ];


function profileMagazine(label, schedule = [], products, description, team = null) {

    function makeBlackFriday (discount){
        if(discount < 0 || discount > 1){
            console.log("OOPS");
        }
        this.products.map((item) =>{
            return item * discount;
        })
    };

    function verifySore (store) {
        const mismatchedProducts = []; 

        store.forEach((item) => { 
        const stockCount = this.products.filter((product) => product === item).length; 
        const marketCount = store.filter((product) => product === item).length; 
        
        if (stockCount !== marketCount){ 
                    mismatchedProducts.push(item); 
        } 
        }); 
        
         return mismatchedProducts.join(', ');
        
    };

    function ellipsisText(text, maxLength) {
        let elipsis;

        if (String(text) ===  "String" || String(text).length > 0 && Number(maxLength) === Number ) {
            elipsis = String(text).slice(0, Number(maxLength)) + '...';
        } else{
            console.log('Write text minimum twoo word and write number for elipsis word');
        }

        return elipsis;
    };

    function censorshipCheck(advertisement, forbiddenWord) {
        let indexForbiddenWord;
        let word = advertisement;
        if (String(advertisement).includes(forbiddenWord)){
            indexForbiddenWord = String(advertisement).indexOf(forbiddenWord);
            let startText = String(advertisement).slice(0, indexForbiddenWord);
            let endText = String(advertisement).slice(indexForbiddenWord + String(forbiddenWord).length , String(advertisement).length - 1)
            word = startText + endText;
        }

        return word;
    };

    function checkDayToSale(startSaleDate) {

        let saleDate = new Date(startSaleDate);
        let today = new Date();

        let manyDay = Math.floor((saleDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000) )
        
        return  manyDay
    };

    function prepareInventory() {
        const daysToSale = this.checkDayToSale("2024/04/26");
        const employee =  this.team;
        const res = (employee * 10 ) * daysToSale ;
        if (res < this.products.length){
            return false
        }
        return true
    };
    
    return {
        label, //company name
        schedule, // work schedule
        products, // products are in stock
        description,
        team, 

        makeBlackFriday,
        verifySore,
        ellipsisText,
        censorshipCheck,
        checkDayToSale,
        prepareInventory,
    }; 
}



const Marcket = profileMagazine("Holala",'', DataProducts,"",1);
console.log(Marcket);
console.log (Marcket.checkDayToSale("2024/07/22"))
console.log (Marcket.prepareInventory())
