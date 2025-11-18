#include <iostream>

using namespace std;

int main(){
	int marks [7];
 int largest =0;
 
 cout<<"enter 7 numbers"<<endl;
 for(int i=0;i<=7;i++){
 	cin>>marks[i];
 	
	 }
	 cout<<"you entered";
	 
	 for(int i=0;i<=7;i++){
	 	if(largest<marks[i]){
	 		largest=marks[i];
		 }
	 
	 }
	 
	cout<<"the largest number is " <<largest <<endl; 
 
 
 
 return 0;
}