//초기설정
const tab = document.querySelectorAll(".tab a");
const con = document.querySelectorAll(".con3");

tab.forEach(function(e){ e.style.background="#43354b" }); // 메뉴 모두 하늘색
tab[0].style.background='#a33ddd'; // 메뉴 첫번째만 파랑색
tab[0].style.color='#bccab4'
tab[1].style.color='skyblue'
con[0].style.backgroundColor='#a33ddd'

con.forEach(function(e){ e.style.display="none" }); // .con를 모두 안보이게함
con[0].style.display='block'; // con 첫번째만 보이게함
	
// 첫번째메뉴를 클릭했을때
tab[0].addEventListener('click', function(){
	tab.forEach(function(e){ e.style.background="#43354b" }); // 메뉴 모두 하늘색
	tab[0].style.background='#a33ddd'; // 메뉴 첫번째만 파랑색
	tab[0].style.color='black';
	tab[1].style.color='skyblue';

	con.forEach(function(e){ e.style.display="none" }); // .con를 모두 안보이게함
	con[0].style.display='block'; // con 첫번째만 보이게함
	con[0].style.backgroundColor="#a33ddd"
})

// 두번째메뉴를 클릭했을때
tab[1].addEventListener('click', function(){
	tab.forEach(function(e){ e.style.background="#43354b" }); // 메뉴 모두 하늘색
	tab[1].style.background='#a33ddd'; // 메뉴 두번째만 파랑색
	tab[1].style.color='black';
	tab[0].style.color='skyblue';

	con.forEach(function(e){ e.style.display="none" }); // .con를 모두 안보이게함
	con[1].style.display='block'; // con 두번째만 보이게함
	con[1].style.backgroundColor="#a33ddd"
})