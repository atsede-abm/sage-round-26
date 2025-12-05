#include <iostream>

using namespace std;

int main() {
                    
    int secret = rand() % 100 + 1;  
    int guess;
  
   do {
        cout << "Enter your guess from 1 upto 100: ";
        cin >> guess;

        if (guess > secret)
            cout << "Too high<<endl";
        else if (guess < secret)
            cout << "Too low<<endl";
        else
            cout << "Correct! You win<<endl";

    } while (guess = secret);

    return 0;
}