#include <iostream>
using namespace std;

string evenOrOdd(int y){
	if(y%2==0){
		return "even";
	}
 

else{
	return "odd";
}

}

int main(){

cout<<evenOrOdd(7);
	return 0;
}