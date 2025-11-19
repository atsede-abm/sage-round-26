#include <iostream>
using namespace std;

string vowlsOrConstant(char letter){

   
    	if((letter== 'a')||(letter== 'e')||(letter== 'i')||(letter== 'o')||(letter== 'u')){
    	
			return "vouls";}
	else{
		return"consonant";	
	}

	}
	
int main(){
	
	cout<<vowlsOrConstant('i');
	return 0;
	
}