({
	block: 'template-page',
	title: 'עלינו',
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
							block: 'about',
							content: [
								{
									block: 'about-list',
									content: [
										{
											icon: 'what.png',
											title: 'מהי טרה sim?',
											text: 'simterra - כרטיס-SIM חדש הדור, אשר מספק שירותי נדידה בינלאומיים על מראש עם היכולת לחדש את האיזון ישירות מהטלפון הנייד שלך בכל עת נוחה. simterra מאפשר שליטה מלאה על המצב של האיזון שלך אף פעם לא מקבל את חשבונות מטורפים כשהם חוזרים הביתה.'
										},
										{
											icon: 'how.png',
											title: 'איך מפעילים את ה- SIM טרה?',
											text: 'simterra מאוד קל לשימוש. אתה פשוט להחליף על זמן הנסיעה בכרטיסי SIM הרגיל שלך לכרטיס simterra. במקרה זה תוכל לקבל מתנה של שלושה חדרים: בארה"ב, אירופה וישראל. עכשיו החברים שלך בישראל, אמריקה ואירופה יוכלו לדבר איתך בשיעורים שלהם המקומיים, ללא קשר למיקום שלך.'
										},
										{
											icon: 'home.png',
											title: 'אינטרנט בבית!',
											text: 'simterra לאפשר את השימוש של כל התכונות הרגילות של הטלפון החכם שלך במהלך הטיול שלך בחו"ל: כדי לגלוש באינטרנט, לעדכן Facebook, לפרסם תמונות בביטחון כי עלויות התקשורת שלך הן בשליטתך.'
										},
										{
											icon: 'special.png',
											title: 'תעריף מיוחד',
											text: 'simterra מספק את תעריפי נדידה הטובים ביותר עבור שיחות בינלאומיות, הודעות טקסט, לשלוח ולקבל נתונים, הפועלים 216 מדינות ברחבי העולם. זה עושה את זה לנסיעות אידיאליות הוא טיעון חזק כדי לקחת את זה בחו"ל.'
										}
									].map(function(item) {
										return {
											block: 'about-list-item',
											content: [
												{
													elem: 'title',
													tag : 'h3',
													content: item.title
												},
												{
													elem : 'info',
													content : [
														{
															elem: 'icon',
															content: [
																{
																	tag: 'img',
																	attrs: { src: 'img/about-list/icons/' + item.icon }
																}
															]
														},
														{
															elem: 'text',
															content: item.text
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