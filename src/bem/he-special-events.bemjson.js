({
	block: 'template-page',
	title: 'אירועים מיוחדים',
	rtl: true,
	lang: 'he',
	content: [
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'special-events',
							content: [
								{
									block: 'special-events-list',
									content: [
										{
											date: 'כדי 12.03.2015' + '<br>' + 'כדי 12.03.2015',
											title: 'מספר טלפון מקומי בחינם',
											text: 'מספר טלפון מקומי ללא תשלום ללקוחות עם מאזן חיובי של לא פחות מ -50 יורו'
										},
										{
											date: 'כדי 12.03.2015' + '<br>' + 'כדי 12.03.2015',
											title: 'הנחה של 50% עבור עקידת כרטיס אשראי',
											text: '<img src="img/special-events-list/1.jpg" style="float: right; margin-left: 10px;">' + 'ב -1 במארס לקוחות באזור ארכנגלסק משנה את תנאי החיבור של הפעולה "הנחה של 50%'
										},
										{
											date: 'כדי 12.03.2015' + '<br>' + 'כדי 12.03.2015',
											title: 'מספר טלפון מקומי בחינם',
											text: 'מספר טלפון מקומי ללא תשלום ללקוחות עם מאזן חיובי של לא פחות מ -50 יורו'
										},
										{
											date: 'כדי 12.03.2015' + '<br>' + 'כדי 12.03.2015',
											title: 'הנחה של 50% עבור עקידת כרטיס אשראי',
											text: '<img src="img/special-events-list/1.jpg" style="float: right; margin-left: 10px;">' + 'ב -1 במארס לקוחות באזור ארכנגלסק משנה את תנאי החיבור של הפעולה "הנחה של 50%'
										}
									].map(function(item) {
										return {
											block: 'special-events-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															elem : 'info',
															content : [
																{
																	elem: 'date',
																	content: item.date
																},
																{
																	elem: 'title',
																	tag : 'h3',
																	content: item.title
																},
																{
																	elem: 'text',
																	content: item.text
																}
															]
														},
														{
															elem : 'more',
															content : 'עוד'
														}
													]
												}
											]
										};
									})
								}
							]
						}
					]
				}
			]
		}
	]
});