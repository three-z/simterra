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
									block: 'special-events-item',
									content: [
										{
											elem : 'info',
											content : [
												{
													elem: 'date',
													content: 'כדי 12.03.2015' + '<br>' + 'כדי 12.03.2015'
												},
												{
													elem: 'title',
													tag : 'h2',
													content: 'מספר טלפון מקומי בחינם'
												},
												{
													elem : 'sub-title',
													tag : 'h3',
													content : 'מספר טלפון מקומי ללא תשלום ללקוחות עם מאזן חיובי של לא פחות מ -50 יור'
												},
												{
													elem: 'text',
													content: 'אם היתרה שלך היא, 50 או יותר יורו, אתה זכאי לשחרר אותך מספר מקומי נוספות בכל הארץ. אם היתרה שלך תהיה פחות מ -50 €, אז המספר המקומי הנוסף שלך הופך חייב. להגדיל את יתרת 50 € ואת המספר המקומי כדי לקבל תשלום שוב.' + '<br><br><img src="img/special-events-item/1.jpg">'
												}
											]
										},
										{
											elem : 'back',
											content : [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: 'לפני'
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