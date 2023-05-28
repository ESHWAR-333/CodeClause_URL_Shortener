const urlList=[];

let btn=document.getElementById("shortenUrl");
btn.addEventListener('click',generateUrl);



async function generateUrl(){
    let longUrl=document.getElementById('longUrl').value;
	console.log(longUrl);
	let shorturl=document.getElementById("shorturl");
	let errorMsg=document.getElementById("errorMsg");
	try{
		const url=`https://api.shrtco.de/v2/shorten?url=${longUrl}`;
		const response=await fetch(url);
		const data=await response.json();
		console.log(data.result.short_link2);
		const smallUrl=data.result.short_link2;
		shorturl.value=smallUrl
		errorMsg.textContent=""
		
	}
	catch (error) {
		console.error(error);
		errorMsg.textContent="*Wrong Url"
	}
	

}

const newUrl=document.getElementById("shorturl");
const copyBtn=document.getElementById("copy");

copyBtn.onclick=()=>{
	newUrl.select();

	window.navigator.clipboard.writeText(newUrl.value);
}