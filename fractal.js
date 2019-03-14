//@ts-check
function setup() {
    let width = 2000;
    let height = 2000;
    let pointx = 0;
    let pointy = 0;
    let factor = 1;

    function rFunc(x,y) {
        return Math.asin((Math.log(x^y) % 2) - 1);
    }
    function gFunc(x,y) {
        return Math.acos((Math.log(x^y) % 2) - 1);
    }
    function bFunc(x,y) {
        return Math.atan(Math.log(x^y));
    }
    function aFunc(x,y) {
        return 1
    }

    let c = document.createElement("canvas");
    c.width = width;
    c.height = height;
    document.body.appendChild(c);
    let ctx = c.getContext("2d");

    let pixelList = [];
    let rMin,rMax,gMin,gMax,bMin,bMax,aMin,aMax;
    rMin=rMax=gMin=gMax=bMin=bMax=aMin=aMax=0;

    for(let x = pointx; x < pointx+width*factor; x+=factor) {
        for(let y = pointy; y < pointy+height*factor; y+=factor) {
            let r = rFunc(x,y);
            let g = gFunc(x,y);
            let b = bFunc(x,y);
            let a = aFunc(x,y);
            pixelList.push([x,y,r,g,b,a]);
            if(rMin > r) {rMin = r;}
            if(gMin > g) {gMin = g;}
            if(bMin > b) {bMin = b;}
            if(aMin > a) {aMin = a;}
            if(rMax < r) {rMax = r;}
            if(gMax < g) {gMax = g;}
            if(bMax < b) {bMax = b;}
            if(aMax < a) {aMax = a;}
        }
    }

    for(let pixel of pixelList) {
        ctx.fillStyle = "rgba("+
        ((pixel[2]-rMin)*255)/(rMax-rMin)+","+
        ((pixel[3]-gMin)*255)/(gMax-gMin)+","+
        ((pixel[4]-bMin)*255)/(bMax-bMin)+","+
        ((pixel[5]-aMin)*255)/(aMax-aMin)+")";
        ctx.fillRect((pixel[0]-pointx)/factor, (pixel[1]-pointy)/factor, 1, 1 );
    }
}
