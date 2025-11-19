#include <iostream>
using namespace std;

int main(){
	int num[7];
	int even=0;
	int odd=0;
	
	cout<<"enter your num";
	for(int i=0; i<7;i++){
		cin>>num[i];
		
		
	}
	for(int i=0;i<7;i++){
		if(num[i]%2==0){
			even+1;
			
		}
		else{odd+1;
		}
		
	}
	cout<<"this is even num"<<even<<endl;
	cout<<"this is odd num"<<odd<<endl;
	return 0;
}