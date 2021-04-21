package com.company.hw7;

import java.util.Scanner;

public class Bank {

    static int loanDebt = 700;

    static void callMakeLoanRepayment() {
        Scanner scanner = new Scanner(System.in);
        int payment;
        char character;
        System.out.println("Введите сумму платежа (кратно 100 у.е.): ");
        payment = scanner.nextInt();
        makeLoanRepayment(payment);

    }

    static void makeLoanRepayment(int amount) {

//        Guard statements
        if (amount < 0) {
            System.out.println("Невозможно провести операцию с суммой, меньше 0. Попробуйте еще раз");
            callMakeLoanRepayment();
        } else if (amount % 100 != 0) {
            System.out.println("Невозможно провести операцию с суммой, не кратной 100 у.е. Попробуйте еще раз");
            callMakeLoanRepayment();
        } else {
            loanDebt -= amount;
        }
    }

    static boolean isCreditPaid() {
        if (loanDebt > 0) {
            System.out.println("Вам осталось оплатить: " + loanDebt + " у.е.");
            System.out.println("Вам нужно совершить " + loanDebt / 100 + " платежей по 100 у.е. или на другую сумму кратно 100 у.е.");
            return false;
        } else if (loanDebt < 0) {
            System.out.println("Вы успешно оплатили весь свой долг по кредиту, и у вас есть переплата в " + -loanDebt + " у.е.");
            return true;
        } else {
            System.out.println("Вы успешно оплатили весь свой долг по кредиту.");
            return true;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char character;
        callMakeLoanRepayment();

        if (!isCreditPaid()) {
            System.out.println("Вы хотите сделать еще один платеж? (Y — да) (N — нет)");
            character = scanner.next().toLowerCase().charAt(0);
            if (character == 'y') {
                callMakeLoanRepayment();
            } else {
                return;
            }
        }
    }
}
