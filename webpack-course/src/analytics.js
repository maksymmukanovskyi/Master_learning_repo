function createAnalytics(){
    let isDestroyed = false
    let counter = 0;
    const handleClick = () => {
        counter ++;
    }
    document.addEventListener("click", handleClick);
    return {
        destroy(){
            document.removeEventListener("click", handleClick);
            isDestroyed = true;
        },
        getClicks(){
            if(isDestroyed){
                return 'Analytics is destroyed'
            }
            return counter;
        }

    }
};
window.analytics = createAnalytics();