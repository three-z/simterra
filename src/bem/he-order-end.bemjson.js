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
													content : 'בחר מוצר'
												},
												{
													elem : 'list-item',
													content : 'לקופה'
												},
												{
													elem : 'list-item',
													mods : { 'active' : true },
													content : 'כדי להשלים'
												}
											]
										}
									]
								},
								{
									block : 'order-end',
									content : [
										{
											tag : 'h2',
											content : 'ההזמנה שלך הושלמה בהצלחה'
										},
										{
											tag : 'h3',
											content : 'לקוחות שקנו'
										},
										{
											block : 'order-end-list',
											content : [
												{
													block : 'order-end-list-item',
													content : [
														{
															elem : 'price',
															content : 'SIM - 20 €; על היתרה - 10 €'
														}
													]
												}
											]
										},
										{
											tag : 'h3',
											content : 'הנתונים האישיים שלך'
										},
										{
											block : 'order-end-personal',
											content : [
												{
													elem : 'confidentiality',
													content : '* אזהרה! אנחנו עולים בקנה אחד עם מדיניות הפרטיות ולא נשתף את המידע שלך עם צדדי שלישיים'
												},
												{
													elem : 'text',
													content : [
														'שם מלא.: <strong>Малышев Виктор Сергевич</strong><br>',
														'טלפון נייד: <strong>+7 (753) 456-78-23</strong><br>',
														'דואר אלקטרוני: <strong>malyha@mail.ru</strong><br>',
														'מספר תעודת זהות: <strong>123-456</strong><br>',
														'כתובת קבועה: <strong>163044, Россия, Архангельская область, г.Архангельск, Ул.Урицкого, д.17, кв.408</strong><br>'
													]
												}
											]
										},
										{
											tag : 'h3',
											content : 'מסירת דואר אלקטרוני לכתובת שצוינה'
										},
										{
											block : 'order-end-delivery',
											content : [
												{
													elem : 'text',
													content : [
														'כתובת משלוח: <strong>163044, Россия, Архангельская область, г.Архангельск, Ул.Урицкого, д.17, кв.408</strong><br>',
														'עלות משלוח: <strong>10 €</strong><br>'
													]
												}
											]
										},
										{
											block : 'order-end-total',
											content : 'סכום: <strong>40 €</strong>'
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