//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're doing great!"
compliments[2]="You must have studied hard!"
compliments[3]="Way to go!"
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Woohoo!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the difference between a jungle and a rain forest?"
choice1[1]="No difference. Simply two different ways in referring to the same thing."
choice1[2]="A jungle in general receives less rain than a rain forest."
choice1[3]="A jungle refers to the thickest area of a rain forest"
choice1[4]="A jungle and a rain forest each contain their own group of distinct plants and animals."

question[2]="What is the world's most common religion?"
choice2[1]="Christianity"
choice2[2]="Buddhism"
choice2[3]="Hinduism"
choice2[4]="Muslim"

question[3]="Which city ranks as the world\'s most populous city?"
choice3[1]="New York (US)"
choice3[2]="Mexico City (Mexico)"
choice3[3]="Tokyo (Japan)"
choice3[4]="Shanghai (China)"

question[4]="According to statistics, what kind of sites on the net are the most popular?"
choice4[1]="Adult content sites"
choice4[2]="Portal sites"
choice4[3]="Chat sites"
choice4[4]="News sites"

question[5]="As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?"
choice5[1]="10 million US"
choice5[2]="10 billion US"
choice5[3]="35 billion US"
choice5[4]="50 billion US"


question[6]="Mount Everest is located between which two countries?"
choice6[1]="India and China"
choice6[2]="China and Nepal"
choice6[3]="Nepal and Bhutan"
choice6[4]="Pakistan and India"

question[7]="What is the smallest country in the world?"
choice7[1]="Monaco"
choice7[2]="Vatican City"
choice7[3]="Liechtenstein"
choice7[4]="Malta"

question[8]="What year did the Titanic sink?"
choice8[1]="1905"
choice8[2]="1912"
choice8[3]="1918"
choice8[4]="1920"

question[9]="What is the capital city of Canada?"
choice9[1]="Toronto"
choice9[2]="Vancouver"
choice9[3]="Ottawa"
choice9[4]="Montreal"

question[10]="The Great Wall of China was built primarily to protect against which group?"
choice10[1]="Mongols"
choice10[2]="Romans"
choice10[3]="Persians"
choice10[4]="Vikings"


solution[1]="c"
solution[2]="a"
solution[3]="b"
solution[4]="b"
solution[5]="d"
solution[6]="b"
solution[7]="b"
solution[8]="b"
solution[9]="c"
solution[10]="a"

