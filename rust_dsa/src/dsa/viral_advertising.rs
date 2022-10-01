// https://www.hackerrank.com/challenges/strange-advertising/problem

pub fn viral_advertising(n: i32) -> i32 {
    let first_day: i32 = 2;
    let mut ad_reach_vec = vec![first_day];
    for i in 1..n {
        ad_reach_vec.push(((ad_reach_vec[(i - 1) as usize] * 3) / 2))
    }

    let mut number_of_likes = 0;
    for day_likes in ad_reach_vec.iter() {
        number_of_likes = number_of_likes + day_likes;
    }

    println!("{}", number_of_likes);
    return number_of_likes;
}