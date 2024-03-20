/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher ( s, k ) {

    const encrypted = [];
    let letters = 'abcdefghijklmnopqrstuvwxyz';

    if ( k < 1 ) {
        return s;
    }

    letters = letters.repeat( k );

    let extra = s.split( '' ).filter( letter => letter.toLowerCase() == letter.toUpperCase() );

    for ( let i in s ) {
        if ( extra.includes( s[ i ] ) ) {
            encrypted.push( s[ i ] );
            continue;
        }

        const index = letters.indexOf( s[ i ].toLowerCase() );
        let replacement = letters[ index + k ];

        if ( s[ i ].toUpperCase() === s[ i ] ) {
            replacement = replacement.toUpperCase();
        }


        encrypted.push( replacement );
    }

    return encrypted.join( '' );

}