public class BankManagementSystem {

    public static void main(String[] args) {

        SavingsAccount savings =
                new SavingsAccount(101, "Anand Rai", 10000);

        CurrentAccount current =
                new CurrentAccount(102, "Rahul Kumar", 15000);

        savings.deposit(2000);
        current.deposit(3000);

        System.out.println("===== Savings Account =====");
        savings.displayDetails();
        System.out.println("Interest : " + savings.calculateInterest());

        System.out.println();

        System.out.println("===== Current Account =====");
        current.displayDetails();
        System.out.println("Interest : " + current.calculateInterest());
    }
}
