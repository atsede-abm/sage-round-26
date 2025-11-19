#include <iostream>
using namespace std;

int main(){
	int num[7];
	int even=0;
	int odd=0;
	
	cout<<"enter your name";
	for(int i=1; i<7;i++){
		cin>>num[i];
		
		
	}
	for(int i=1;i<7;i++){
		if(num[i]%2==0){
			even++;
			
		}
		else{odd++;
		}
		
	}
	cout<<"this is even num"<<even<<endl;
	cout<<"this is odd num"<<odd<<endl;
	return 0;
}