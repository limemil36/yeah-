//1. 선택자 = 박스 9개 
let mainBox = document.querySelectorAll('.mainBox');
let macho = document.querySelectorAll('img');
let bigBox = document.querySelector('#bigBox');
let startBox = document.querySelector('#startBox');


//2. 이벤트 = 클릭
startBox.addEventListener('click', startFn);
//mainBox[0].addEventListener('click', touchFn);

let number1 = 0;
let number2 = 0;
//3. 함수
// 1) 마우스가 호버되면 게임시작 
function startFn(){
    // 9가지 칸 중에 랜덤으로 두더지가 나타난다.
    // 간격은 1초로 유지.
    randomFn();
    //구상 1. 1초마다 반복적으로 호출되는 함수 
    setInterval(randomFn, 3000);
    //구상 2. 위 함수가 1~9사이 랜덤 수를 생성 
    function randomFn(){
        number1 = Math.floor(Math.random() * 9);
        number2 = Math.floor(Math.random() * 9);
        matchFn();
        console.log(number1, number2);
            //구상 4. 클릭하면 흑백으로 바뀌고 바로 사라짐
                // 선택자 구현 -> 박스
                // 이벤트 구현 -> 클릭 
                // 함수 구현 -> 흑백(css -> filter : grayscale(100%), 사라짐
                    //어떤걸 어떻게 -> 나와있는 마초 number1, number2
        macho[number1].addEventListener('click', black1Fn);
        macho[number2].addEventListener('click', black2Fn);
        function black1Fn(){
            macho[number1].style.filter = 'grayscale(100%)';
            setTimeout(disappear1Fn, 500);
                function disappear1Fn(){
                    macho[number1].style.display = 'none';
                    macho[number1].style.filter = 'grayscale(0%)';

                }
        }
        function black2Fn(){
            macho[number2].style.filter = 'grayscale(100%)';
            setTimeout(disappear2Fn, 500);
            function disappear2Fn(){
                macho[number2].style.display = 'none';
                macho[number2].style.filter = 'grayscale(0%)';
            }
        }
    }
    //랜덤으로 나온 이전 수가 반복해서 나오지는 않는다
        //구상 1.만약 어떤 숫자가 이전 숫자와 같다면 -> 안나옴
            // 만약 다르다면 -> 나옴
    //구상 3. 위 랜덤 수가 나온 순서의 박스에서 마초 튀어나옴
    function matchFn(){
        macho[number1].style.display = 'flex';
        macho[number2].style.display = 'flex';
        setTimeout(removeFn, 2000);
            function removeFn(){
                macho[number1].style.display = 'none';
                macho[number2].style.display = 'none';
            }
    }

}
