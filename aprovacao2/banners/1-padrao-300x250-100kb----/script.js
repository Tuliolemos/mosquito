var animations = [
    {
        id: '#i01',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {top:0, opacity: 1} 
    },{
        id: '#i02',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 400, 
        animations: {top:0, opacity: 1} 
    },{
        id: '#i03',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {top:0, opacity: 1} 
    },{
        id: '#i04',  
        duration: 400,  
        delayBefore: 400,  
        delayAfter: 2000, 
        animations: {top:0, opacity: 1} 
    },
    [
        {
            id: '#i01',  
            duration: 200,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },{
            id: '#i02',  
            duration: 200,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },{
            id: '#i03',  
            duration: 200,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },{
            id: '#i04',  
            duration: 200,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },
    ],
    {
        id: '#i05',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {top:0, opacity: 1} 
    },{
        id: '#i06',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 2000, 
        animations: {top:0, opacity: 1} 
    },{
        id: '#i06',  
        duration: 300,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {top:"5%", opacity: 1} 
    },{
        id: '#i06',  
        duration: 300,  
        delayBefore: 0,  
        delayAfter: 2000, 
        animations: {top:0, opacity: 1} 
    },
    [
        {
            id: '#i05',  
            duration: 400,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },{
            id: '#i06',  
            duration: 400,  
            delayBefore: 0,  
            delayAfter: 0, 
            animations: {top:0, opacity: 0} 
        },
    ],{
        id: '#i07',  
        duration: 400,  
        delayBefore: 0,  
        delayAfter: 2000, 
        animations: {top:0, opacity: 1} 
    },

]
new YAnimation(animations, {loop: true, clearAfterEnd: false}).startAnimation()