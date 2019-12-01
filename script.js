

function confirmBox(){
    if (confirm(" vous voulez jetter un coup d'oeil sur xxxvidsxxx?")) {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }
}
window.onload= function(){
    setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
    confirmBox() }, 1000);
    document.querySelector('button').addEventListener('click', function(){
        document.querySelectorAll('p').forEach(e => e.style.color='blue');
        document.querySelectorAll('h1').forEach(e => e.style.color='green');
        document.querySelectorAll('h2').forEach(e => e.style.color='green');
        document.querySelectorAll('h3').forEach(e => e.style.color='green');
        document.querySelectorAll('p').forEach(e => e.fontFamily='courier');
        document.querySelectorAll('h1').forEach(e => e.style.color='Comic Sans');
        document.querySelectorAll('h2').forEach(e => e.style.color='Comic Sans');
        document.querySelectorAll('h3').forEach(e => e.style.color='Comic Sans');
    })
}

