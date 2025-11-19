#include <iostream>
using namespace std;

int product(int A, int B){
    return(A*B);
	}

 

	


int main(){
	int A , B;
	
	cout<<"enter your A"<<endl;
	cin>>A;
	cout<<"enter your B"<<endl;
    cin>>B;
    cout<< "product is "<<product(A , B);
	return 0;
}