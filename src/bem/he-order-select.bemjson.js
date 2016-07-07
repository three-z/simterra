({
	block: 'template-page',
	title: 'כרטיס SIM להזמין',
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
							block: 'order',
							content: [
								{
									block : 'order-steps',
									content : [
										{
											elem : 'list',
											content : [
												{
													elem : 'list-item',
													mods : { 'active' : true },
													content : 'בחר מוצר'
												},
												{
													elem : 'list-item',
													content : 'לקופה'
												},
												{
													elem : 'list-item',
													content : 'כדי להשלים'
												}
											]
										}
									]
								},
								{
									block : 'order-select',
									content : [
										{
											block : 'order-select-slider',
											content : [
												{
													elem : 'list',
													content : [
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '1', 'style': 'background-image: url(img/order-select-list/items/1.png);' },
															content : ''
														},
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '2', 'style': 'background-image: url(img/order-select-list/items/2.png);' },
															content : ''
														},
														{
															elem : 'list-item',
															attrs : { 'data-slide' : '3', 'style': 'background-image: url(img/order-select-list/items/3.png);' },
															content : ''
														}
													]
												},
												{
													elem : 'previous',
													tag : 'a',
													attrs : { 'href' : '#' },
													content : 'לפני'
												},
												{
													elem : 'next',
													tag : 'a',
													attrs : { 'href' : '#' },
													content : 'קדימה'
												}
											]
										},
										{
											block : 'order-select-content',
											content : [
												{
													block : 'order-select-content-list',
													content : [
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-1' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>SIMTERRA as a gift  – special for CAL clients</h3>',
																		'<strong>כרטיס SIM:</strong> חינם <br>',
																		'<strong>יתרה:</strong> 20 € <br>',
																		'<strong>עלות:</strong> 20 € <br>',
																		'<small><i>רק עבור לקוחות CAL</i></small> <br>',
																		'<br>',
																		'אתה קאל החברה ללקוח? כרטיס ספר SIMterra עם מאזן ראשוני של 20 יורו ולקבל את כרטיס 10 יורו שווה בחינם! <br>',
																		'בנוסף, אתה מקבל הנחה קבועה של 50% על כל השירותים הבינלאומיים: שיחות, SMS ואינטרנט.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																}
															]
														},
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-2' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>מפת SIMterra עם מאזן ראשוני של 20 €</h3>',
																		'<strong>כרטיס SIM:</strong> 10 € <br>',
																		'<strong>יתרה:</strong> 20 € <br>',
																		'<strong>עלות:</strong> 30 € <br>',
																		'<br>',
																		'המחיר כולל את עלות הכרטיס (10 יורו) ומילוי כרטיס בסך של 20 יורו. אתה יכול ישירות: לבצע ולקבל שיחות, לשלוח ולקבל SMS, משתמש באינטרנט. <br>',
																		'עם זה אתה יכול לבדוק את היתרה בכל עת, ואם יש צורך, הדף אותו בין אם באמצעות אתר אינטרנט או דרך תפריט USSD מהמכשיר הנייד ללא חיבור לאינטרנט.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																}
															]
														},
														{
															block : 'order-select-content-list-item',
															mods : { 'slide' : '1' },
															attrs : { 'id' : 'order-select-content-3' },
															content : [
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																},
																{
																	elem : 'text',
																	content : [
																		'<h3>מפת SIMterra עם מאזן אפס</h3>',
																		'<strong>כרטיס SIM:</strong> 10 € <br>',
																		'<strong>יתרה:</strong> 0 € <br>',
																		'<strong>עלות:</strong> 10 € <br>',
																		'<br>',
																		'כדי להתחיל להשתמש בכרטיס הזה, אנו חייבים לחדש את המאזן שלה. ניתן לעשות זאת בכל עת דרך האתר עצמו, כמו גם באמצעות תפריט USSD מהמכשיר הנייד ללא חיבור לאינטרנט.'
																	]
																},
																{
																	elem : 'order',
																	content : [
																		{
																			tag : 'a',
																			attrs : { 'href' : '#' },
																			content : 'לקופה'
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});