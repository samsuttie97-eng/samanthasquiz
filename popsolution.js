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

question[1]="Which planet is known as the Red Planet?"
choice1[1]="Venus"
choice1[2]="Jupiter"
choice1[3]="Mars"
choice1[4]="Saturn"

question[2]="What is the largest mammal in the world?"
choice2[1]="Elephant"
choice2[2]="Blue Whale"
choice2[3]="Giraffe"
choice2[4]="Orca"

question[3]="What is the capital city of Japan?"
choice3[1]="Kyoto"
choice3[2]="Osaka"
choice3[3]="Tokyo"
choice3[4]="Nagoya"

question[4]="What is H2O commonly known as?"
choice4[1]="Hydrogen"
choice4[2]="Salt"
choice4[3]="Water"
choice4[4]="Oxygen"

question[5]="What is the main language spoken in Brazil?"
choice5[1]="Spanish"
choice5[2]="Portuguese"
choice5[3]="French"
choice5[4]="English"


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
solution[2]="b"
solution[3]="c"
solution[4]="c"
solution[5]="b"
solution[6]="b"
solution[7]="b"
solution[8]="b"
solution[9]="c"
solution[10]="a"


