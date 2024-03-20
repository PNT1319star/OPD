<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Профессия</title> 
    <link rel="stylesheet" href="style.css"> 
    <style> 
    .container2{ 
        position: relative; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-wrap: wrap; 
        gap: 100px 50px; 
        padding: 100px 50px; 
    } 
 
    .container2 .card{ 
        position: relative; 
        display: flex; 
        justify-content: center; 
        align-items: flex-start; 
        width: 350px; 
        height: 300px; 
        background: #fff; 
        border-radius: 20px; 
        box-shadow: 0 35px 80px rgba(176, 175, 74, 0.3); 
    } 
 
    .container2 .card:hover{ 
        height: 400px; 
    } 
 
    .container2 .card .imgBx{ 
        position: absolute; 
        top: 20px; 
        width: 300px; 
        height: 220px; 
        background: #333; 
        border-radius: 12px; 
        transition: all 0.5s ease; 
    } 
 
    .container2 .card:hover .imgBx{ 
        top: -100px; 
        scale: 0.75; 
        box-shadow: 0 15px 45px rgba(0,0,0,0.3); 
    } 
 
    .container2 .card .imgBx img{ 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 10px; 
    } 
    </style> 
</head> 
<body> 
    <div class="headerpage"></div> 
  <div> 
   <ul> 
    <li><a href="index.html">Main.page</a></li> 
    <li><a href="list_expert.html">Эксперты</a></li> 
    <li><a href="list_profess.php">Профессия</a> 
   </ul> 
  </div> 
    <div class="sitplace"></div> 
    <div class="listTema"> 
        <h1>Профессия</h1> 
    </div> 
    <hr/> 
 <div class="container2"> 
  <div class="card"> 
   <div class="imgBx" style="--clr:#49cfc2;"> 
                <img src="./css/flont.jpg" alt=""> 
            </div> 
   <div class="content"></div> 
  </div> 
  <div class="card"> 
   <div class="imgBx" style="--clr:#d6ae57;"> 
                <img src="./css/back.jpg" alt=""> 
            </div> 
   <div class="content"></div> 
  </div> 
  <div class="card"> 
   <div class="imgBx" style="--clr:#8f63b6;"> 
                <img src="./css/base.png" alt=""> 
            </div> 
   <div class="content"></div> 
  </div> 
 </div> 
 
</body> 
</html>