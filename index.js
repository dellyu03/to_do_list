var addbtn = document.querySelector(".plan__add-btn");  //추가 버튼 정의
var deleteallbtn = document.querySelector(".plan__deleteall-btn") //전체 삭제 버튼 정의
var addclickedTime = 1;

//추가 버튼이 클릭될때마다 클릭된 횟수를 더하는 함수
function addclickCount()  {
    addclickedTime +=1;
}




//추가 버튼 클릭시 기능하는 함수 일당 계획의 최대 한도는 4개로 제한 합니다.
//to-do click Time이 기준이 아닌 계획 개수가 기준이 되어야함
//중간에 삭제 한 후 추가하려 해도 버튼이 4번 눌렸으면 생성이 안됨
addbtn.onclick = function () {
    var plan_count = document.getElementsByClassName("plan__date__plan").length;
    console.log(plan_count);
    if (addclickedTime <= 4){
        var nthplan = `.plan__date__plan:nth-child(${addclickedTime})` //n번째 계획의 클래스 선택자를 문자열로 저장하는 변수 (초기값:1)
        var planlabel = document.querySelector(nthplan); //planlabe에 선택자가 nthplan인 요소를 지정
        planlabel.style.display = "flex";
        addclickCount() //clickCount를 늘려주는 함수
    }
    else {
        alert("계획은 최대 4개만 생성 가능합니다!")
    }
    
}

//전체 삭제 버튼 구현 
deleteallbtn.onclick = function () {
    popConfirm()
    chooseAlldelete()
}

//실제 전체 삭제 구현 코드
function chooseAlldelete () {
    var yesbtn = document.querySelector(".alldeleteyes");
    var nobtn = document.querySelector(".alldeleteno");

    //삭제 버튼 구현
    yesbtn.onclick = function() {
        var window__confirm = document.querySelector(".window__confirm")
        window__confirm.style.display = "none";
        for (i=0; i<4;){
            i++
            var nthdelete = `.plan__date__plan:nth-child(${i})`
            todelete = document.querySelector(nthdelete);
            todelete.style.display="none";
        }
        location.reload();
    }

    nobtn.onclick = function() {
        var window__confirm = document.querySelector(".window__confirm")
        window__confirm.style.display = "none";
    }
}

//전체 삭제창을 띄우는 코드
function popConfirm () {
    var window__confirm = document.querySelector(".window__confirm")
    window__confirm.style.display = "block";
}

