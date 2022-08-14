---
title: Infinite Conquest / Submit score
tags: [PLAYDATE]
style: border
color: danger
description: Registra la puntuación de tu reino de Infinite Conquest.
---

> Este es el estado actual del reino. ¡Homenajead a los reyes más poderosos!

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="/assets/images/uploads/infinite_conquest/infinite-conquest-sdk-submit.js"></script>

<form class="needs-validation">
  <div class="form-group">
    <label for="nick">King name</label>
    <input type="text" class="form-control" id="nick" aria-describedby="nick" placeholder="King name" required>
    <small id="nickHelp" class="form-text text-muted">This name will be displayed publicly along with your score.</small>
    <div class="invalid-feedback">
        Please choose your name.
    </div>
    <div class="valid-feedback">
        Long and prosperous life!
    </div>
  </div>
  <div class="form-group">
    <label for="twitter">Twitter user</label>
    <input type="text" class="form-control" id="twitter" placeholder="username">
    <small id="twitterHelp" class="form-text text-muted">(Optional) Your King name will become a link to your twitter timeline.</small>
  </div>
  <button id="submit" type="submit" class="btn btn-primary">Submit your score</button>
</form>
