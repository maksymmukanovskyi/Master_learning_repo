function createAnalytics(){
    let destroyed = false
    let counter = 0;
    const handleClick = () => {
        counter ++;
    }
    document.addEventListener("click", handleClick);
    return {
        destroy(){
            document.removeEventListener("click", handleClick);
            destroyed = true;
        },
        getClicks(){
            if(destroyed){
                return 'Analytics is destroyed'
            }
            return counter;
        }

    }
};
window.analytics = createAnalytics();