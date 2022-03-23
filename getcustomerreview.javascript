let customer_reviews = {
	average_rating: "",
	total_reviews: "",
	pid: "",
	user: []
}

let review_list = document.querySelectorAll(".gws-localreviews__google-review");

let reviewSnippet = "", reviewFulltext = "";

customer_reviews.average_rating = document.querySelector(".review-score-container .Aq14fc").innerText;  

customer_reviews.total_reviews = document.querySelector(".review-score-container .z5jxId").innerText.replace(" reviews", "");

customer_reviews.pid = document.querySelector(".review-dialog-top .DvzRrc.dialog-write-button").dataset.pid; 
	
for(let c=0; c<5; c++){	 
	
	try {
		//comment = review_list[c].querySelector(".gws-localreviews__general-reviews-block .review-full-text").innerHTML;
		reviewSnippet = review_list[c].querySelector(".gws-localreviews__general-reviews-block .review-snippet").innerHTML;
	}catch (e){
		reviewSnippet = "";
	}
	
	try { 
		reviewFulltext = review_list[c].querySelector(".gws-localreviews__general-reviews-block .review-full-text").innerHTML;
	}catch (e){
		reviewFulltext = "";
	}
  
	if(reviewFulltext == ""){
		
		try {
			reviewFulltext = review_list[c].querySelector(".gws-localreviews__general-reviews-block .Jtu6Td").innerHTML.replace('<span jscontroller="P7L8k" jsaction="rcuQ6b:npT2md">',"").replace('</span>',"");	
		}catch (e){
			reviewFulltext == "";
		}
	}
	
	customer_reviews.user.push({
	   "image": review_list[c].querySelector(".gws-localreviews__general-reviews-block img.lDY1rd").src,
	   "name": review_list[c].querySelector(".gws-localreviews__general-reviews-block .TSUbDb").innerText,
	   "stars": review_list[c].querySelector(".gws-localreviews__general-reviews-block .Fam1ne.EBe2gf").attributes[1].nodeValue.replace("Rated ", "").replace(" out of 5,", ""), 
	   "date_posted": review_list[c].querySelector(".gws-localreviews__general-reviews-block .dehysf.lTi8oc").innerText,
	   "review":{
			/*"snippet": reviewSnippet,*/
			"fulltext": reviewFulltext
	   },
	});
}

//console.log(JSON.stringify(customer_reviews));

console.log(customer_reviews);
