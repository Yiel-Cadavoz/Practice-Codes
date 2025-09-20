package prelim_2ndYear;

public class MultiplicationTable {
    public static void main(String[] args){
        int size = 10;
        int table[][] = new int [size][size];
        
        for (int i = 0; i < size; i++){
            for (int j = 0; j < size; j++){
                table[i][j] = (i + 1) * (j + 1);
            }
            
        }
        
        for (int i = 0; i < size; i++){
            for (int j = 0; j < size; j++){
                System.out.printf("%4d", table[i][j]);
            }
            System.out.println();
        }
    }
}
