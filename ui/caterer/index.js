(function () 
{
    const sideBar = document.querySelector(".side-drawer");
    const menu = document.querySelector(".hamburger");

    function resizeHandler()
    {
        if (window.innerWidth >= 768 && sideBar.style.display === 'none') 
            {
                sideBar.style.display = 'block';
            }
        else if(window.innerWidth < 768)
            {
                sideBar.style.display = 'none';
            }
    }

    function toggleSideBar(e)
    {
        e.preventDefault();
        if (sideBar.style.display === 'block') 
        {
            sideBar.style.display = 'none';
        } 
        else 
        {
            sideBar.style.display = 'block';
        }
    
    }

    addEventListener("resize",resizeHandler,false);
    menu.addEventListener("click",toggleSideBar,false);
})();

