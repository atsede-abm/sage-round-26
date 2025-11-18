#include <iostream>

using namespace std;

int main(){
	int num [3];
 int smallest;
 
 cout<<"enter 3 numbers"<<endl;
 for(int i=0;i<3;i++){

 	cin>>num[i];
	 }
	 smallest=num[0];
	 cout<<"you entered";
	 
	 for(int i=0;i>=3;i++){
	 	if(smallest>num[i]){
	 		smallest=num[i];
		 }
	 
	 }
	 
	cout<<" the smallest number is " <<smallest <<endl; 
 
 
 
 return 0;
}