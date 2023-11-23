var addbtn = document.querySelector(".plan__add-btn");  //추가 버튼 정의
var addclickedTime = 1;



//추가 버튼 클릭시 함수 일당 계획의 최대 한도는 4개로 제한 합니다.
addbtn.onclick = function () {
    if (addclickedTime <= 4){
        var nthplan = `.plan__date__plan:nth-child(${addclickedTime})`
        var planlabel = document.querySelector(nthplan);
        planlabel.style.display = "flex";
        addclickCount()
    }
    else {
        alert("계획은 최대 4개만 생성 가능합니다!")
    }
    
}

//추가 버튼이 클릭될때마다 클릭된 횟수를 더하는 함수
function addclickCount()  {
    addclickedTime +=1;
}

