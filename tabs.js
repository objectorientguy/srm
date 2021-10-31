jQuery('.First').mouseover(function() {
    jQuery('.target').hide();
    jQuery('#div' +$(this).attr('target')).show();
    });
    
    year = document.querySelector(".menu").querySelectorAll("a");
    console.log(year);
    
    year.forEach(element => {
       element.addEventListener("mouseover" , function() {
           year.forEach(nav=>nav.classList.remove("active"))
           this.classList.add("active");
       })
    });
    

