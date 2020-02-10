import React, { Component } from 'react'

export class Quote extends Component {

    getQuote = () => {
        const inspirationalQuotes = [
            ["Tough times don’t last. Tough people do. – Robert H. Schuller"],
            ["Keep going. Everything you need will come to you at the perfect time."],
            ["You have to be at your strongest when you’re feeling at your weakest."],
            ["Never give up. Great things take time. Be patient."],
            ["It does not matter how slowly you go as long as you do not stop. – Confucius"],
            ["You have to be at your strongest when you’re feeling at your weakest."],
            ["Courage is one step ahead of fear. – Coleman Young"],
            ["If you feel like giving up, just look back on how far you are already."],
            ["Look in the mirror. That’s your competition."],
            ["Focus on your goal. Don’t look in any direction but ahead."],
            ["Everything you’ve ever wanted is on the other side of fear. — George Addair"],
            ["Pain is temporary. Quitting lasts forever. – Lance Armstrong"],
            ["The pain you feel today will be the strength you feel tomorrow. – Unknown"],
            ["We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa"],
            ["A problem is a chance for you to do your best. – Duke Ellington"],
            ["Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley"],
            ["Remember it’s just a bad day, not a bad life."],
            ["Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better. – Unknown"],
            ["It’s not about perfect. It’s about effort. – Jillian Michaels"],
            ["Believe you can and you’re halfway there. – Theodore Roosevelt"],
            ["Challenges are what make life interesting. Overcoming them is what makes them meaningful."],
            ["You are so much more than what you are going through. – John Tew"],
            ["Passion first and everything will fall into place. – Holly Holm"],
            ["You don’t gain anything from stressing. Remember that."],
            ["You have to be at your strongest when you’re feeling at your weakest."],
            ["Difficult roads always lead to beautiful destinations. – Zig Ziglar"],
            ["Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out. – Unknown"],
            ["Success is what happens after you have survived all of your disappointments."],
            ["Goals may give focus, but dreams give power. – John Maxwell"],
            ["Don’t wish it were easier. Wish you were better. ― Jim Rohn"],
            ["Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."],
            ["Hustle until you no longer have to introduce yourself."],
            ["Success is what happens after you have survived all of your disappointments."],
            ["You don’t always get what you wish for. But you always get what you work for."],
            ["You don’t find will power, you create it."],
            ["Once you choose hope, anything’s possible. – Christopher Reeve"],
            ["Push yourself because no one else is going to do it."],
            ["You cannot fail at being yourself. – Wayne Dyer"],
            ["Don’t wait for opportunity. Create it."],
            ["You are the only one who can limit your greatness. – Unknown"],
            ["The first and greatest victory is to conquer self. – Plato"],
            ["Results happen over time, not overnight. Work hard, stay consistent, and be patient."],
            ["With confidence you have won before you have started. – Marcus Garvey"],
            ["Success is what comes after you stop making excuses. – Luis Galarza"],
            ["You don’t want to look back and know you could have done better."],
            ["The moment you doubt whether you can fly, you cease for ever to be able to do it. – J.M. Barrie"],
            ["Be so good they can’t ignore you. – Steve Martin"],
            ["You will never always be motivated. You have to learn to be disciplined."],
            ["Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale"],
            ["When you know what you want, and want it bad enough, you’ll find a way to get it. – Jim Rohn"],
            ["The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma"],
            ["Motivation is what gets you started. Habit is what keeps you going. – Jim Rohn"],
            ["Never stop trying. Never stop believing. Never give up. Your day will come. – Unknown"],
            ["Results happen over time, not overnight. Work hard, stay consistent, and be patient. – Unknown"],
            ["Our greatest glory is not in never falling, but in rising every time we fall. — Confucius"],
            ["Success is what happens after you have survived all of your disappointments. – Unknown"],
            ["Don’t try to be perfect. Just try to be better than you were yesterday. – Unknown"],
            ["Start where you are. Use what you have. Do what you can. – Arthur Ashe"],
            ["Don’t stop until you’re proud."],
            ["Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi"],
            ["I’m not telling you it is going to be easy, I’m telling you it’s going to be worth it. – Art Williams"],
            ["If you want it, you’ll find a way. If you don’t, you’ll find an excuse."],
            ["Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich"],
            ["It is during our darkest moments that we must focus to see the light. — Aristotle Onassis"],
            ["Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi"],
            ["We may encounter many defeats but we must not be defeated. – Maya Angelou"],
            ["Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers"],
            ["He who is not courageous enough to take risks will accomplish nothing in life. – Muhammad Ali"],
            ["We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis"],
            ["When you fear your struggles, your struggles consume you. When you face your struggles, you overcome them."],
            ["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela"],
            ["Keep going. Everything you need will come to you at the perfect time."],
            ["Set a goal so big that you can’t achieve it until you grow into the person who can. – Unknown"],
            ["All our dreams can come true, if we have the courage to pursue them. – Walt Disney"],
            ["The path to success is to take massive, determined action. – Tony Robbins"],
            ["The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson"],
            ["If you get tired, learn to rest, not quit."],
            ["Pessimism leads to weakness, optimism to power. – William James"],
            ["If it doesn’t challenge you, it won’t change you."],
            ["The struggle you’re in today is developing the strength you need for tomorrow. – Unknown"],
            ["Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll"],
            ["Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett"],
            ["Strength is the product of struggle. You must do what others don’t to achieve what others wont. – Henry Rollins"],
            ["Don’t think about what might go wrong. Think about what might go right. – Unknown"],
            ["Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. – Roy T. Bennett"],
            ["You have to fight through some bad days to earn the best days of your life. – Unknown"],
            ["Make the most of yourself….for that is all there is of you. – Ralph Waldo Emerson"],
            ["It takes courage to grow up and become who you really are. – E.E. Cummings"],
            ["Every next level of your life will demand a different version of you. – Unknown"],
            ["Don’t let your fear decide your future. – Shalane Flanagan"],
            ["Do something today that your future self will thank you for."],
            ["You were put on this Earth to achieve your greatest self, to live out your purpose, and to do it courageously. – Steve Maraboli"],
            ["The future belongs to those who believe in the beauty of their dreams. – Franklin D. Roosevelt"],
            ["Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny. – John Assaraf"],
            ["Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett"],
            ["Choosing to be positive and having a grateful attitude is going to determine how you’re going to live your life. – Joel Osteen"],
            ["If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer"],
            ["Life is a process. We are a process. The universe is a process. – Anne Wilson Schaef"],
            ["Life shrinks or expands in proportion to one’s courage. – Anaïs Nin"]
          ];


          return inspirationalQuotes[Math.floor(Math.random() * (inspirationalQuotes.length - 1))]
    }


    render() {
        return (
            <div className="message">
                {this.getQuote()}
            </div>
        )
    }
}

export default Quote
