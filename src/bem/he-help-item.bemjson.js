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
											block: 'help-item',
											content: [
												{
													elem: 'title',
													tag : 'h2',
													content: 'מה Synterra?'
												},
												{
													elem: 'description',
													content: 'תיאור קצר של הכתבה. אם אתה רוצה להציג או לשנות את ההזמנה? בדף "מצב ההזמנה" אתה יכול לבדוק את מצב הזמנה, מעקב אחר החבילה, לשנות את כתובת המשלוח או דואר אלקטרוני, כדי להדפיס את התוצאה ועוד.'
												},
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'קישור 1'
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
																	content: 'קישור 2'
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
																	content: 'קישור 3'
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
																	content: 'קישור 4'
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
																	content: 'קישור 5'
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
																	content: 'קישור 6'
																}
															]
														}
													]
												},
												{
													elem : 'info',
													content : [
														{
															elem: 'sub-title',
															tag : 'h3',
															content: 'קישור 1'
														},
														{
															elem: 'text',
															content:
																'<img src="img/help-item/1.jpg" style="float: left; margin-right: 10px;">' +
																'ההתקדמות חדש AI מתגאה אוניברסיטת טאפטס. תוכנית מיוחדת פותחה, אשר מטיל ספק את הכדאיות של ביצוע רובוט של פקודות מסוימות. דווח על המוצר החדש הוצג בכנס AI-HRI, וכן סקירה זמינה על באינטרנט ספקטרום IEEE.' + '<br>' +
																'מבחינה מושגית, הטכנולוגיה החדשה אינה חדשה: לפני משהו כמו זה שימש בקרת גישה ותמסורת נתונים במערכות מחשב. עכשיו, עם זאת, כדי להדגים רובוט דמוי אדם קטן שימש לראשונה. לאחר קבלת הצו, הוא מייד לא ממהר למלא אותו. ראשית, המכונית מנתחת את היכולות שלך ואת היכולות פיסיות כרוכות בביצוע אינדיקציה. בנוסף, הרובוט נחשב המצב במערכת יחסים "מעולה כפופים": הרובוט "חושב" אם הוא צריך לעשות כדי למלא את ההזמנה הזאת. כדי שזה יקרה, נתן את ההוראה חייבת להיות הרשות המתאימה.' + '<br>' + 'אם הרובוט אינו מסוגל לבצע, יודיע על כך מי שנתן אותו. לאחר מכן, הרובוט יכול לציין את הנתונים, "לשנות את דעתך" ועדיין להשלים את המשימה. היו כמה וידאו. הרובוט שני הראשונים לא יכול לבצע את הפקודה מההתחלה, לעומת זאת, קיבל ציון נתוני עדיין הוא מסוגל לממש אותן. בסרטון האחרון הרובוט סירב להיענות אינדיקציה, מאז למפעיל אין את הסמכות הדרושה. ' + '<br>' + 'ברור, הפיתוח החדש יעשה מהפכה בעולם של בינה מלאכותית, אבל צעד אחד יותר לקראת הקמתה של מניין AI טרם הוצע. באותו AI כי הוא כל כך מפחד הסמכויות אשר יהיה, כולל ביל גייטס, אילון מוסק וסטיבן הוקינג.' + '<br>' +
																'<img src="img/help-item/2.jpg">'
														},
														{
															elem: 'up',
															content : [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'לראש הדף'
																}
															]
														},
														'<br><br><br>',
														{
															elem: 'sub-title',
															tag : 'h3',
															content: 'קישור 2'
														},
														{
															elem: 'text',
															content: 'מבחינה מושגית, הטכנולוגיה החדשה אינה חדשה: לפני משהו כמו זה שימש בקרת גישה ותמסורת נתונים במערכות מחשב. עכשיו, עם זאת, כדי להדגים רובוט דמוי אדם קטן שימש לראשונה. לאחר קבלת הצו, הוא מייד לא ממהר למלא אותו. ראשית, המכונית מנתחת את היכולות שלך ואת היכולות פיסיות כרוכות בביצוע אינדיקציה. בנוסף, הרובוט נחשב המצב במערכת יחסים "מעולה כפופים": הרובוט "חושב" אם הוא צריך לעשות כדי למלא את ההזמנה הזאת. כדי שזה יקרה, נתן את ההוראה חייבת להיות הרשות המתאימה.'
														},
														{
															elem: 'up',
															content : [
																{
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'לראש הדף'
																}
															]
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
		}
	]
});