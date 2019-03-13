//@ts-check
function setup() {
    let width = 2000;
    let height = 2000;
    let pointx = -1000;
    let pointy = -1000;
    let factor = 1;

    function rFormula(x,y) {
        return Math.sin(Math.log(x*y));
    }
    function gFormula(x,y) {
        return Math.cos(Math.sqrt(x/y));
    }
    function bFormula(x,y) {
        return Math.tan(Math.log(x^y));
    }
    function aFormula(x,y) {
        return 1
    }

    let c = document.createElement("canvas");
    c.width = width;
    c.height = height;
    document.body.appendChild(c);
    let ctx = c.getContext("2d");

    let pixelList = [];
    let ranStandx = pointx+Math.random()*width*factor
    let ranStandy = pointy+Math.random()*height*factor
    let ranStandr = rFormula(ranStandx, ranStandy)
    let ranStandg = gFormula(ranStandx, ranStandy)
    let ranStandb = bFormula(ranStandx, ranStandy)
    let ranStanda = aFormula(ranStandx, ranStandy)

    for(let x = pointx; x < pointx+width*factor; x+=factor) {
        for(let y = pointy; y < pointy+height*factor; y+=factor) {
            let r = (rFormula(x,y)*255) / ranStandr;
            let b = (gFormula(x,y)*255) / ranStandb;
            let g = (bFormula(x,y)*255) / ranStandg;
            let a = (aFormula(x,y)*255) / ranStanda;
            ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
            ctx.fillRect((x-pointx)/factor, (y-pointy)/factor, 1, 1 );
        }
    }
}