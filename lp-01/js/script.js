const products = [
	{ name: "らずべりーパイ", description: "甘酸っぱい果実と、香ばしい生地", price: "¥680", color: "d83c9c" },
	{ name: "金柑タルト", description: "ほろ苦さを閉じ込めた季節の一品", price: "¥720", color: "d99f37" },
	{ name: "バノフィーパイ", description: "バナナとキャラメルの濃厚な余韻", price: "¥700", color: "b97948" },
	{ name: "チョコ タルト", description: "カカオの深みを楽しむ大人の味", price: "¥760", color: "65443c" },
	{ name: "ラフランスカスタードタルト", description: "洋梨とやさしいカスタード", price: "¥740", color: "a7b86d" }
];

const reviews = [
	{ text: "ひとくち目から、素材の香りがふわっと広がりました。休日の午後が少しだけ特別になります。", name: "東京都 30代・女性" },
	{ text: "甘すぎないので、ワインと合わせても美味しい。手土産にするといつも喜ばれます。", name: "神奈川県 40代・男性" },
	{ text: "季節ごとに変わるお品書きが楽しみです。お店の静かな空気も含めて好きな場所。", name: "千葉県 20代・女性" }
];

const faqs = [
	{ question: "予約や取り置きはできますか？", answer: "お電話またはメールにて、前日まで承っております。商品名と個数をお知らせください。" },
	{ question: "ギフトラッピングには対応していますか？", answer: "はい。季節の包装紙でお包みします。ご用途に合わせたメッセージカードもご用意できます。" },
	{ question: "定休日と営業時間を教えてください。", answer: "営業時間は11:00から18:00まで、水曜・木曜が定休日です。売り切れ次第閉店する場合がございます。" },
	{ question: "アレルギー対応は可能ですか？", answer: "製造環境の都合上、個別の完全除去対応は行っておりません。詳しくはご来店前にお問い合わせください。" }
];

const productList = document.querySelector("#product-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

products.forEach((product) => {
	const article = document.createElement("article");
	article.className = "product-card";
	article.innerHTML = `
		<div class="product-image"><img src="https://placehold.jp/600x400.png?text=Item" alt="${product.name}のイメージ"></div>
		<div class="product-meta"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="product-price">${product.price}</span></div>`;
	productList.appendChild(article);
});

reviews.forEach((review) => {
	const article = document.createElement("article");
	article.className = "voice-card";
	article.innerHTML = `<blockquote>“${review.text}”</blockquote><div class="voice-person"><img src="https://placehold.jp/150x150.png?text=User" alt="${review.name}のアバター"><span>${review.name}</span></div>`;
	voiceList.appendChild(article);
});

faqs.forEach((faq) => {
	const item = document.createElement("article");
	item.className = "faq-item";
	item.innerHTML = `<div class="faq-question" role="button" tabindex="0" aria-expanded="false">${faq.question}</div><div class="faq-answer">${faq.answer}</div>`;
	const question = item.querySelector(".faq-question");
	const toggle = () => {
		const isOpen = item.classList.toggle("is-open");
		question.setAttribute("aria-expanded", String(isOpen));
	};
	question.addEventListener("click", toggle);
	question.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggle();
		}
	});
	faqList.appendChild(item);
});
