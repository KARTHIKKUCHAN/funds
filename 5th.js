// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const video1Recorded= true

const video2Recorded=false
function video1(){
    return new Promise((resolve,reject)=>{
        if(video1Recorded){
            resolve('video 1 recorded')
        }else {
            reject ( 'video 1 not recorded')
        }
    })

}function video2(){
    return new Promise((resolve,reject)=>{
        if(video2Recorded){
            resolve(
                'video 2 recorded')
        }else {
            reject ( 'video 2 not recorded')
        }
    })

}

async function videos(){
    try{
    const Video1 =await video1()
    console.log('VIDEO 1 RECORDED')
    const Video2 = await video2()
    console.log('VIDEO 2 RECORDED')}
    catch(err){
        console.log('error occucred')
    }
}

videos() 