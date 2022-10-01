// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

pub fn kangaroo(x1: i32, v1: i32, x2: i32, v2: i32) -> String {

    if x1 == v2 {
        println!("YES");
        return String::from("YES");
    }
    if v1 == v2 {
        println!("NO");
        return String::from("NO");
    }
    if x1 > x2 && v1 > v2 {
        println!("NO");
        return String::from("NO");
    }
    if x1 < x2 && v1 < v2 {
        println!("NO");
        return String::from("NO");
    }
    let mut first_kangaroo_position = x1;
    let mut second_kangaroo_position = x2;
    
    loop {
        first_kangaroo_position = first_kangaroo_position + v1;
        second_kangaroo_position = second_kangaroo_position + v2;
        println!("first kangaroo position: {}", first_kangaroo_position);
        println!("second kangaroo position: {}", second_kangaroo_position);

        if first_kangaroo_position == second_kangaroo_position {
            println!("YES");
            return String::from("YES");
        }
        if x1 > x2 && second_kangaroo_position > first_kangaroo_position {
            println!("NO");
            return String::from("NO");
        }
        if x1 < x2 && second_kangaroo_position < first_kangaroo_position {
            println!("NO");
            return String::from("NO");
        }
    }
}
