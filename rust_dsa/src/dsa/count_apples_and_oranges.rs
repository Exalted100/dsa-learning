// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

pub fn count_apples_and_oranges(s: i32, t: i32, a: i32, b: i32, apples: &[i32], oranges: &[i32]) {
    let mut num_of_apples = 0;
    let mut num_of_oranges = 0;
    
    for apple in apples.iter() {
        if apple + a >= s && apple + a <= t {
            num_of_apples = num_of_apples + 1;
        }
    }
    
    for orange in oranges.iter() {
        if orange + b <= t && orange + b >= s {
            num_of_oranges = num_of_oranges + 1;
        }
    }
    
    println!("{}", num_of_apples);
    println!("{}", num_of_oranges);
}
