        // 방 종류 별로 가격 나오는 부분
let roomSizeArr = [...document.querySelectorAll('.roomSelected')]
let roomFeeArr = ['100,000', '200,000', '300,000', '400,000'];

for (let i=0;i<roomSizeArr.length;i++){
    roomSizeArr[i].addEventListener('click', function (){
        for (let i=0;i<roomSizeArr.length;i++){
            if (this === roomSizeArr[i]){
                document.querySelector('#roomFeeBox').innerText = roomFeeArr[i];
            }
        }
    })
}
        // 인원 수
let countButton = [...document.querySelectorAll('button.countButton')];
for (let i=0;i<countButton.length;i++){
    countButton[i].addEventListener('click',function(){
        if(this.parentNode === document.querySelector('div#adult')){
            if (document.querySelector('input#adultCount').value <= 0) {
                if(this.innerText === '+'){
                    document.querySelector('input#adultCount').value++;
                }
            }else{
                this.innerText === '-' ?
                document.querySelector('input#adultCount').value-- : document.querySelector('input#adultCount').value++;
            }
        }else{
            if (document.querySelector('input#childCount').value <= 0) {
                if(this.innerText === '+'){
                    document.querySelector('input#childCount').value++;
                }
            }else{
                this.innerText === '-' ?
                document.querySelector('input#childCount').value-- : document.querySelector('input#childCount').value++;
            }
        }
    })
}