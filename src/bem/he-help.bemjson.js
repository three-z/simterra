({
	block: 'template-page',
	title: 'לעזור',
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
							elem : 'layout-left',
							content : [
								{
									block : 'sidebar',
									content : [
										{
											block : 'sidebar-navigation',
											content : [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: { 'active': true },
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'כל הפורומים'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'מה Simterra?'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'כרטיסים להזמין סיימנו טרה'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'תנאים מיוחדים עבור לקוחות CAL'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'כרטיס חיבור'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'מחשבון'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'איך קוראים'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'תפריט USSD'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'כרטיס חיבור'
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
						},
						{
							elem : 'layout-right',
							content : [
								{
									block: 'help',
									content: [
										{
											block: 'help-list',
											content: [
												{
													title: 'מהו סיים טרה',
													text: 'כרטיס SIM TERRA' + '<br>' + 'כרטיס SIM TERRA + 10 יורו על המאזן' + '<br>' + 'כרטיס SIM TERRA + 20 יורו על המאזן' + '<br>' + '(קאל עבור לקוחות החברה)'
												},
												{
													title: 'כרטיס SIM להזמין TERRA',
													text: 'איפה אפשר לקנות' + '<br>' + 'מפת הבחירה' + '<br>' + 'אפשרויות משלוח' + '<br>' + 'הוראת תשלום'
												},
												{
													title: 'מהו סיים טרה',
													text: 'כרטיס SIM TERRA' + '<br>' + 'כרטיס SIM TERRA + 10 יורו על המאזן' + '<br>' + 'כרטיס SIM TERRA + 20 יורו על המאזן' + '<br>' + '(קאל עבור לקוחות החברה)'
												},
												{
													title: 'כרטיס SIM להזמין TERRA',
													text: 'איפה אפשר לקנות' + '<br>' + 'מפת הבחירה' + '<br>' + 'אפשרויות משלוח' + '<br>' + 'הוראת תשלום'
												},
												{
													title: 'מהו סיים טרה',
													text: 'כרטיס SIM TERRA' + '<br>' + 'כרטיס SIM TERRA + 10 יורו על המאזן' + '<br>' + 'כרטיס SIM TERRA + 20 יורו על המאזן' + '<br>' + '(קאל עבור לקוחות החברה)'
												},
												{
													title: 'כרטיס SIM להזמין TERRA',
													text: 'איפה אפשר לקנות' + '<br>' + 'מפת הבחירה' + '<br>' + 'אפשרויות משלוח' + '<br>' + 'הוראת תשלום'
												}
											].map(function(item) {
												return {
													block: 'help-list-item',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem : 'info',
																	content : [
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
		}
	]
});